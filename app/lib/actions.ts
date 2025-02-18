'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache' //Since you're updating the data displayed in the invoices route, you want to clear this cache and trigger a new request to the server.
import { z } from 'zod' //validation library

// Use Zod to update the expected types
const FormSchema = z.object({
  name: z.string(),
})

const DetailFormSchema = z.object({
  name: z.string(),
  memo: z.string(),
  imageUrl: z.string(),
})

const ToDo = FormSchema.omit({})
const ToDoDetail = DetailFormSchema.omit({})

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

  revalidatePath('/')
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

  revalidatePath('/')
  redirect('/')
}

// Patch Todo By Id
export const updateTodoById = async (
  id: number,
  prevState: State,
  formData: FormData,
) => {
  // Validate form using Zod
  const validatedFields = ToDoDetail.safeParse({
    name: formData.get('name'),
    memo: formData.get('memo'),
    imageUrl: formData.get('image'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Todo.',
    }
  }

  const { name, memo, imageUrl } = validatedFields.data

  const url = `${process.env.NEXT_PUBLIC_API_KEY}/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${id}`

  try {
    await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        memo,
        imageUrl,
      }),
    })
  } catch (error) {
    return {
      message: `[Todo] Failed to Update By Id isCompleted. Error: ${error}`,
    }
  }

  revalidatePath('/')
  redirect('/')
}

// Delete Todo
export const deleteTodo = async (id: number) => {
  const url = `${process.env.NEXT_PUBLIC_API_KEY}/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${id}`

  try {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (error) {
    return {
      message: `[Todo] Failed to Delete Todo. Error: ${error}`,
    }
  }

  revalidatePath('/')
}
