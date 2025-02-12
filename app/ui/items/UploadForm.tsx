'use client'

import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import styles from '@/styles/items/UploadForm.module.scss'

interface UploadFormProps {
  imageSrc?: string | null
  setImageUrlEdit?: Dispatch<SetStateAction<boolean>>
}

export default function UploadForm(props: UploadFormProps) {
  const { setImageUrlEdit, imageSrc } = props

  const [imageUrl, setImageUrl] = useState(imageSrc)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.currentTarget.files !== null) {
      const selectedFile = event.target.files[0]
      await handleSubmit(selectedFile)
    }
  }

  const handleSubmit = async (file: string | Blob) => {
    console.log('!!seelcted file', file)
    const formData = new FormData()
    formData.append('image', file)

    const url = `${process.env.NEXT_PUBLIC_API_KEY}/${process.env.NEXT_PUBLIC_TENANT_ID}/images/upload`

    const response = await fetch(url, {
      method: 'POST',
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      body: formData,
    })

    if (response.ok) {
      const data = await response.json()
      console.log('[Upload File] success', data.url)
      setImageUrl(data.url)
    } else {
      console.error('[Upload File] error')
    }
  }

  return (
    <div className={styles.box}>
      <label htmlFor="file">
        <div className={styles.uploadButton}></div>
      </label>
      {!imageUrl && (
        <input
          className={styles.hide}
          id="file"
          name="file"
          type="file"
          onChange={handleFileChange}
        />
      )}
      {imageUrl && (
        <>
          <img className={styles.uploadImage} src={imageUrl} alt="" />
          <input
            className={styles.hide}
            id="image"
            name="image"
            value={imageUrl}
            readOnly
          />
        </>
      )}
    </div>
  )
}
