'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache' //Since you're updating the data displayed in the invoices route, you want to clear this cache and trigger a new request to the server.
import { z } from 'zod' //validation library

// Use Zod to update the expected types
const FormSchema = z.object({
  name: z.string(),
})

const ToDo = FormSchema.omit({})

export type State = {
  errors?: {
    name?: string[]
  }
  message?: string | null
}

// Post Todo data
export const createTodo = async (prevState: State, formData: FormData) => {
  // Validate form using Zod
  const validatedFields = ToDo.safeParse({
    name: formData.get('name'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Todo.',
    }
  }

  const { name } = validatedFields.data

  const url = `${process.env.NEXT_PUBLIC_API_KEY}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })
  } catch (error) {
    return {
      message: `Failed to Create Todo. Error: ${error}`,
    }
  }

  redirect('/') //Redirect to home
}

// Patch Todo isCompleted
export const updateTodo = async (id: number, isCompleted: boolean) => {
  const url = `${process.env.NEXT_PUBLIC_API_KEY}/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${id}`

  try {
    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isCompleted }),
    })
  } catch (error) {
    return {
      message: `[Todo] Failed to Update isCompleted. Error: ${error}`,
    }
  }

  revalidatePath('/') //서버 컴포넌트의 새로고침 없이 변경된 부분을 적용
}
