import { useEffect, useState } from 'react'

export function useNFCReader() {
  const [supported, setSupported] = useState(false)
  const [status, setStatus] = useState('Idle')
  const [data, setData] = useState(null)

  useEffect(() => {
    setSupported('NDEFReader' in window)
  }, [])

  const startScan = async () => {
    if (!supported) {
      setStatus('Web NFC not supported')
      return
    }
    try {
      const reader = new NDEFReader()
      await reader.scan()
      reader.onreading = (event) => {
        const decoder = new TextDecoder()
        for (const record of event.message.records) {
          if (record.recordType === 'text') {
            const value = decoder.decode(record.data)
            setData(value)
            setStatus('Read successful')
          }
        }
      }
      setStatus('Scanning...')
    } catch (err) {
      console.error(err)
      setStatus('Permission denied or scan error')
    }
  }

  return { supported, status, data, startScan }
}