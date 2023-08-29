import { colors } from '@cesarneo/tokens'

export function ColorsGrid() {
  return Object.entries(colors).map(([name, value]) => (
    <div
      key={name}
      className="p-8"
      style={{
        backgroundColor: value,
      }}
    >
      <div
        className="flex justify-between font-mono"
        style={{
          color: name === 'white' ? 'black' : 'white',
        }}
      >
        <strong>${name}</strong>
        <span>{value}</span>
      </div>
    </div>
  ))
}
