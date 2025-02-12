//Get All Todo data
export async function fetchTodo() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_KEY}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`

    const checkList = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data
      })

    return checkList
  } catch (error) {
    console.error('[Fetch Todo]', error)

    throw new Error('Failed to fetch todo data.')
  }
}

//Get Todo data by Id
export async function fetchTodoById(itemId: number) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_KEY}/${process.env.NEXT_PUBLIC_TENANT_ID}/items/${itemId}`

    const checkList = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data
      })

    return checkList
  } catch (error) {
    console.error('[Fetch Todo by Id]', error)

    throw new Error('Failed to fetch todo by Id data.')
  }
}
