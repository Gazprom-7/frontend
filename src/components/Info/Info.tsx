import { FC } from 'react'
import { Drawer } from 'antd'
import { useAppDispatch } from 'src/services/hooks'
import { closeInfo } from 'src/services/slices/employeeSlice'

interface InfoProps {
  isOpen: boolean
  children?: React.ReactNode
}

const Info: FC<InfoProps> = ({ isOpen = false, children }) => {
  const dispatch = useAppDispatch()

  const handleClose = () => dispatch(closeInfo())

  return (
    <Drawer
      open={isOpen}
      onClose={handleClose}
      closeIcon={false}
      width={280}
      style={{ padding: 16 }}
      styles={{
        mask: { backgroundColor: 'transparent' },
        header: { display: 'none' },
        body: { padding: '0 16px 8px' },
      }}
    >
      {children}
    </Drawer>
  )
}

export default Info
