export async function submitGoogleForm(formId: string, entries: Record<string, string>): Promise<void> {
  if (!formId) {
    throw new Error('Google Form ID is missing');
  }

  const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(entries)) {
    if (key && value !== undefined && value !== null) {
      params.append(key, value);
    }
  }

  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });
    // With no-cors, we can't read the response status, 
    // but if it didn't throw a network error, we consider it optimistically successful.
  } catch (error) {
    console.error('Failed to submit form', error);
    throw error;
  }
}
