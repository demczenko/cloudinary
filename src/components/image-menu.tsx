"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HamburgerMenu from "./svgs/HamburgerMenu";
import { Albums } from "./svgs";
import { AlbumDialog } from "./add-to-album";
import { SearchResult } from "@/types/types";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function ImageMenu({ public_id, tags }: SearchResult) {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-8 h-8 p-0">
            <HamburgerMenu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <AlbumDialog public_id={public_id} tags={tags} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
