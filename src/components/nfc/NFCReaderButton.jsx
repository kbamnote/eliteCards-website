import React, { useState } from 'react'

export default function NFCReaderButton() {
  const [status, setStatus] = useState('Idle')

  const handleRead = async () => {
    if (!('NDEFReader' in window)) {
      setStatus('Web NFC not supported')
      return
    }
    try {
      const reader = new NDEFReader()
      await reader.scan()
      reader.onreading = (event) => {
        const decoder = new TextDecoder()
        for (const record of event.message.records) {
          console.log('NFC Record', record)
          if (record.recordType === 'text') {
            setStatus(`Read: ${decoder.decode(record.data)}`)
          }
        }
      }
      setStatus('Scanning...')
    } catch (err) {
      console.error(err)
      setStatus('Permission denied or scan error')
    }
  }

  return (
    <button onClick={handleRead} className="px-4 py-2 rounded bg-teal-600 hover:bg-teal-500 text-white">
      Read NFC ({status})
    </button>
  )
}