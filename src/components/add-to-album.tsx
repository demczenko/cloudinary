import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Albums } from "./svgs";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { ChangeEvent, useState } from "react";
import { SearchResult } from "@/types/types";
import { CreateFolder } from "./actions/actions";

export function AlbumDialog({ public_id, tags }: SearchResult) {

  const [albumName, setAlbumName] = useState("")
  const [isOpen, setOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Albums />
          Add to album
        </DropdownMenuItem>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add selected photo to album</DialogTitle>
          <DialogDescription>
            Type an album you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input onChange={(event: ChangeEvent<HTMLInputElement>) => setAlbumName(event.target.value)} id="name" value={albumName} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={async () => {
            await CreateFolder(albumName, {public_id, tags}).then(() => {
              setOpen(false)
            })
          }} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
