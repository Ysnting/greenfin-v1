type Props = {
  scopes: string[];
};

export default function AuthorizationScopes({
  scopes,
}: Props) {
  return (
    <div className="authorization-scopes">
      {scopes.map((scope) => (
        <span
          className="authorization-scope"
          key={scope}
        >
          {scope}
        </span>
      ))}
    </div>
  );
}