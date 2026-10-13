// Writes a waitlist sign-up straight to Firestore over REST, so the landing
// page doesn't need the Firebase SDK. Rules only allow create on /waitlist
// with exactly { email, product, createdAt == request.time }.
const PROJECT = "ez-read-pro-3761e";
const API_KEY = "AIzaSyCx9hUf1Q-06GMBhzOq5wNOvCsoeDeuz9I";

export type WaitlistProduct = "ez-browser" | "ez-updates";

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function joinWaitlist(email: string, product: WaitlistProduct) {
  const id = crypto.randomUUID();
  const name = `projects/${PROJECT}/databases/(default)/documents/waitlist/${id}`;
  const res = await fetch(
    `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents:commit?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        writes: [
          {
            update: {
              name,
              fields: {
                email: { stringValue: email.trim().toLowerCase() },
                product: { stringValue: product },
              },
            },
            updateTransforms: [{ fieldPath: "createdAt", setToServerValue: "REQUEST_TIME" }],
            currentDocument: { exists: false },
          },
        ],
      }),
    },
  );
  if (!res.ok) throw new Error(`Waitlist sign-up failed (${res.status})`);
}
