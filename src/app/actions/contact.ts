'use server'

export async function submitContact(_prevState: unknown, formData: FormData) {
  const data = Object.fromEntries(formData)
  console.log('Contact submission:', data)
  return { success: true }
}
