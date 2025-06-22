import type { FC } from 'react'
import type { DropzoneState } from 'react-dropzone'

import { FileUpIcon } from '@/icons/file-up'
import { cn } from '@/utils/cn'

interface FileInputProps {
  dropzone: DropzoneState
}

export const FileInput: FC<FileInputProps> = ({ dropzone }) => {
  return (
    <div
      {...dropzone.getRootProps()}
      className={cn(
        'flex w-full flex-col items-center justify-center space-y-2.5 rounded-lg border border-dashed border-neutral-300 px-12 py-12 text-neutral-500 sm:px-24 md:px-[100px] lg:px-[140px]',
        {
          'border-blue-500 text-blue-500': dropzone.isDragAccept,
          'border-red-500 text-red-500': dropzone.isDragReject
        }
      )}
    >
      <FileUpIcon className="size-6" />
      <p className="text-center text-sm font-medium">
        {dropzone.isDragActive ? (
          <span>
            {dropzone.isDragAccept
              ? 'Drop your file here'
              : 'This is not a valid file'}
          </span>
        ) : (
          <>
            Drag and drop, or{' '}
            <label
              htmlFor="file"
              className="relative cursor-pointer font-semibold text-neutral-500 focus-within:ring-0 focus-within:outline-none"
            >
              <span>choose file</span>
              <input
                id="file"
                name="file"
                type="file"
                className="sr-only"
                {...dropzone.getInputProps()}
              />
            </label>{' '}
            file to upload
          </>
        )}
      </p>
    </div>
  )
}
