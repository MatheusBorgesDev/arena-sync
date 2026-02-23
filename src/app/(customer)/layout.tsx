/**
 * Layout do módulo Cliente (raiz).
 * Login/Register sem navbar; (protected) tem seu próprio layout com navbar/footer.
 */
export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
