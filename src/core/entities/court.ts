/**
 * Entidade Quadra.
 * TS puro, sem React.
 */

export interface Court {
  id: string;
  name: string;
  slug: string;
  status: 'active' | 'inactive' | 'maintenance';
  createdAt: Date;
}
