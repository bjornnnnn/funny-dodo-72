import { ComponentChildren } from "preact";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
type Props = {
  children: ComponentChildren;
};

export default function Footer({ children }: Props) {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Getting Started", href: "#" },
        { name: "Guide", href: "#" },
        { name: "API", href: "#" },
        { name: "Showcase", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Forum", href: "#" },
        { name: "Discord", href: "#" },
      ],
    },
  ];

  return (
    <div class="bg-white flex flex-col md:flex-row w-full max-w-screen-lg gap-8 md:gap-16 px-8 py-8 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <LemonIcon class="inline-block" aria-hidden="true" />
          <div class="font-bold text-2xl">
            Kontakt
          </div>
        </div>
        <div class="text-gray-500">
<p>Tävlingsorganisation: Björn Naeslund</p> 
<p>mobil: <a href="tel:+46733709503">+46 73 370 95 03</a></p>
<p> epost: <a href="mailto:bjornnae@gmail.com">bjornnae@gmail.com</a></p>
</div>
      </div>


    </div>
  );
}
