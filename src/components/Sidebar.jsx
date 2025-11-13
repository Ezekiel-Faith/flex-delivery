import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Package,
  Clock,
  Settings,
  ShieldAlert,
  ReceiptText,
  MessageCircleMore,
  Banknote,
  ChevronDown,
} from 'lucide-react';
import { createNavItems } from '../constants/nav-menu';

const icons = {
  Dashboard: LayoutDashboard,
  Users,
  Package,
  Banknote,
  Message: MessageCircleMore,
  Receipt: ReceiptText,
  Support: ShieldAlert,
  Settings,
  Clock,
};

const labels = {
  Dashboard: 'Dashboard',
  Users: 'Users',
  AllListings: 'All Listings',
  DeliveryJobs: 'Delivery Jobs',
  DeliveryOffers: 'Delivery Offers',
  Marketplace: 'Marketplace',
  FlexReward: 'Flex Reward',
  Disputes: 'Disputes',
  Transactions: 'Transactions',
  Support: 'User Support Ticket',
  Settings: 'Settings',
  Blog: 'Blog & Broadcast',
  Templates: 'Templates',
  AuditLogs: 'Audit Logs',
};

const DEFAULT_NAV_ITEMS = createNavItems(icons, labels);

function NavItem({
  icon: Icon,
  label,
  badge,
  children,
  defaultOpen,
  highlight,
}) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const base = 'flex items-center gap-3 rounded-lg p-3 text-sm transition-all';
  const inactive = 'text-gray-400';
  const activeBg = 'bg-white/10 text-white';

  return (
    <li>
      <button
        onClick={() => children && setOpen(!open)}
        className={`${base} bg-[#1E3A8A] w-full justify-start cursor-pointer ${
          children ? 'pr-2' : ''
        } ${highlight ? 'bg-black' : inactive} ${
          children && open ? activeBg : ''
        }`}
      >
        <Icon className='h-5 w-5' />
        <span className='text-left'>{label}</span>

        <div className='flex items-center gap-2 ml-auto'>
          {badge != null && (
            <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-[12px] text-[#142f7c] font-semibold'>
              {badge}
            </span>
          )}
          {children && (
            <ChevronDown
              className={`h-4 w-4 text-gray-300 transition-transform ${
                open ? 'rotate-180' : ''
              }`}
            />
          )}
        </div>
      </button>

      {children && open && <ul className='mt-2 ml-5 space-y-2'>{children}</ul>}
    </li>
  );
}

function Sub({ label, badge, pill, highlight }) {
  const base =
    'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all';
  const inactive = 'text-gray-400';
  const pillBg = 'bg-[#1E3A8A] text-gray-400 rounded-md';
  const highlightStyle = 'text-gray-400 bg-transparent';

  return (
    <li>
      <a
        className={`${base} ${pill ? pillBg : inactive} ${
          highlight ? highlightStyle : ''
        } w-full flex justify-start`}
      >
        <span>{label}</span>
        {badge != null && (
          <span className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-[12px] text-[#1E3A8A] font-semibold'>
            {badge}
          </span>
        )}
      </a>
    </li>
  );
}

export default function Sidebar({ navItems = DEFAULT_NAV_ITEMS }) {
  return (
    <aside className='flex flex-col justify-between gap-30 w-65 bg-[#1E3A8A] px-4 pb-20  text-white'>
      <div className='rounded-xl p-3 bg-[#142f7c] mt-10 '>
        <nav className='h-full'>
          <ul className='space-y-3'>
            {navItems.map((item, idx) => (
              <NavItem
                key={idx}
                icon={item.icon}
                label={item.label}
                badge={item.badge}
                defaultOpen={item.defaultOpen}
                highlight={item.highlight}
              >
                {item.children?.map((sub, subIdx) => (
                  <Sub
                    key={subIdx}
                    label={sub.label}
                    badge={sub.badge}
                    pill={sub.pill}
                    highlight={sub.highlight}
                  />
                ))}
              </NavItem>
            ))}
          </ul>
        </nav>
      </div>

      <div className='text-center'>
        <div className='inline-flex items-center justify-center px-3 py-2 rounded-full bg-white text-xs font-semibold uppercase tracking-wider text-gray-900 mb-3'>
          Dev
        </div>
        <p className='text-gray-300 text-xs'>v2.0</p>
      </div>
    </aside>
  );
}
