export function createNavItems(icons, labels, options = {}) {
  return [
    { icon: icons.Dashboard, label: labels.Dashboard },
    {
      icon: icons.Users,
      label: labels.Users,
      badge: 5,
      defaultOpen: false,
      children: [
        // { label: 'Pending' },
        // { label: 'Completed' },
        // { label: 'Refunds' },
      ],
    },
    {
      icon: icons.Package,
      label: labels.AllListings,
      defaultOpen: true,
      children: [
        { label: labels.DeliveryJobs, badge: 5, highlight: true },
        { label: labels.DeliveryOffers },
        { label: labels.Marketplace, badge: 5, pill: true },
      ],
    },
    { icon: icons.Banknote, label: labels.FlexReward },
    { icon: icons.Message, label: labels.Disputes },
    {
      icon: icons.Receipt,
      label: labels.Transactions,
      defaultOpen: false,
      children: [
        // { label: 'Pending' },
        // { label: 'Completed' },
        // { label: 'Refunds' },
      ],
    },
    { icon: icons.Support, label: labels.Support },
    {
      icon: icons.Settings,
      label: labels.Settings,
      defaultOpen: false,
      children: [
        // { label: 'Pending' },
        // { label: 'Completed' },
        // { label: 'Refunds' },
      ],
    },
    { icon: icons.Clock, label: labels.Blog },
    { icon: icons.Clock, label: labels.Templates },
    { icon: icons.Clock, label: labels.AuditLogs },
    ...(options.extraItems || []),
  ];
}
