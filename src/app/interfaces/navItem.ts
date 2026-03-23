export interface NavItem {
  id?: string;              // optional for parent items
  label: string;
  children?: NavItem[];     // 👈 add this
  expanded?: boolean; // for mobile dropdown toggle
}