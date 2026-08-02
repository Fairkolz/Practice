"use client";

import { useState } from "react";
import ExpandableCard from "@/components/ui/ExpandableCard";
import Reveal from "@/components/ui/Reveal";

export interface ExpandableCardGroupItem {
  icon?: React.ReactNode;
  title: string;
  text: string;
  items?: string[];
  image?: string;
}

interface ExpandableCardGroupProps {
  items: ExpandableCardGroupItem[];
  gridClassName?: string;
  cardClassName?: string;
  reveal?: boolean;
  stagger?: number;
}

export default function ExpandableCardGroup({
  items,
  gridClassName = "",
  cardClassName = "",
  reveal = false,
  stagger = 0,
}: ExpandableCardGroupProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className={gridClassName}>
      {items.map((item, i) => {
        const card = (
          <ExpandableCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            text={item.text}
            items={item.items}
            image={item.image}
            className={cardClassName}
            open={open}
            onToggle={toggle}
          />
        );

        return reveal ? (
          <Reveal key={item.title} delay={i * stagger} className="h-full">
            {card}
          </Reveal>
        ) : (
          card
        );
      })}
    </div>
  );
}
