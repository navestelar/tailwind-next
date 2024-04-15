'use client'

import { ComponentProps, createContext, useContext, useId, useState } from "react";

export type RootProps = ComponentProps<'div'>

type FileInputContexType = {
  id: string
  files: File[]
  onFileSelected: (files: File[], multiple: boolean) => void
}

const FileInputContex = createContext({} as FileInputContexType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function handleSelectedFiles(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContex.Provider value={{ id, files, onFileSelected: handleSelectedFiles }}>
      <div {...props} />
    </FileInputContex.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContex)