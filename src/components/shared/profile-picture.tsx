import type { ImgHTMLAttributes } from 'react'

import profilePic from '@/assets/images/profile/profile-picture.webp'
interface ProfilePictureProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

export function ProfilePicture({
  className,
  fetchPriority = 'high',
  ...props
}: ProfilePictureProps) {
  return (
    <img
      src={profilePic}
      alt="Ignacio Avendaño"
      className={className}
      width={768}
      height={1185}
      loading="eager"
      decoding="async"
      fetchPriority={fetchPriority}
      {...props}
    />
  )
}
