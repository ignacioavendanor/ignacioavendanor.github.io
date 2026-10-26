import type { ImgHTMLAttributes } from 'react'

import profilePic384 from '@/assets/images/profile/profile-picture-384.webp'
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
      srcSet={`${profilePic384} 384w, ${profilePic} 768w`}
      sizes="(min-width: 1280px) 380px, (min-width: 768px) 320px, (min-width: 640px) 256px, (min-width: 375px) 224px, 192px"
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
