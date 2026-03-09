import type { LucideIcon } from 'lucide-react';
import { CalendarCheck, LayoutGrid, Clock, DollarSign } from 'lucide-react';
import type { Court } from '@/core/entities';

export interface DashboardStat {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export const MOCK_STATS: DashboardStat[] = [
  {
    label: 'Agendamentos Hoje',
    value: '12',
    description: '+3 em relação a ontem',
    icon: CalendarCheck,
  },
  {
    label: 'Quadras Ativas',
    value: '4',
    description: 'De 6 quadras cadastradas',
    icon: LayoutGrid,
  },
  {
    label: 'Pendentes',
    value: '5',
    description: 'Aguardando confirmação',
    icon: Clock,
  },
  {
    label: 'Receita do Dia',
    value: 'R$ 1.250',
    description: '+18% vs. média semanal',
    icon: DollarSign,
  },
];

export const MOCK_COURTS: Court[] = [
  {
    id: 'c1',
    name: 'Quadra A - Society',
    slug: 'quadra-a-society',
    status: 'active',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'c2',
    name: 'Quadra B - Vôlei',
    slug: 'quadra-b-volei',
    status: 'active',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'c3',
    name: 'Quadra C - Tênis',
    slug: 'quadra-c-tenis',
    status: 'maintenance',
    createdAt: new Date('2024-02-10'),
  },
  {
    id: 'c4',
    name: 'Quadra D - Beach Tennis',
    slug: 'quadra-d-beach-tennis',
    status: 'inactive',
    createdAt: new Date('2024-03-01'),
  },
];
