type TokensGridProps = {
  tokens: Record<string, string>
}

export function TokensGrid({ tokens }: TokensGridProps) {
  return (
    <table className="w-full font-sans text-white border-collapse">
      <thead>
        <tr>
          <th className="px-4 py-3 text-left">Name</th>
          <th className="px-4 py-3 text-left">Value</th>
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([name, value]) => (
          <tr key={name}>
            <td className="px-4 py-3 text-left">{name}</td>
            <td className="px-4 py-3 text-left">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
