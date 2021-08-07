interface StateRecord {
    key: string
    callback(): void
}

const stateRecords: StateRecord[] = []

export function pushStateRecord(key: string, callback: () => void) {
    stateRecords.push({ key, callback })
}

export function popStateRecord(key?: string) {
    if (key) {
        const record = stateRecords.find((r) => r.key === key)
        if (record) {
            record.callback()
            removeStateRecord(record.key)
        }
    } else {
        if (stateRecords.length > 0) {
            const record = stateRecords[stateRecords.length - 1]
            record.callback()
            removeStateRecord(record.key)
        }
    }
}

export function removeStateRecord(key: string) {
    const record = stateRecords.find((r) => r.key === key)!
    const index = stateRecords.indexOf(record)
    if (index > -1) {
        stateRecords.splice(index, 1)
    }
}

(window as any).reactBackableAction = (): boolean => {
    if (stateRecords.length > 0) {
        popStateRecord()
        return true
    } else {
        return false
    }
}
