import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react'
import React from 'react'

export function TestMaterial() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <div>
      <Button
        variant="gradient"
        nonce={undefined}
        onClick={handleOpen}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        Open Dialog
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <DialogHeader
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          Its a simple dialog.
        </DialogHeader>
        <DialogBody
          divider={true}
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <Button
            variant="text"
            color="red"
            className="mr-1"
            nonce={undefined}
            onClick={handleOpen}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            nonce={undefined}
            onClick={handleOpen}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
