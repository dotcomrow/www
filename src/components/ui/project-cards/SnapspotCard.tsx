"use client";

import { Card, CardBody, Image } from "@nextui-org/react";
import {Link} from "@nextui-org/link";

export default function SnapspotCard() {

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          <div className="relative col-span-2 md:col-span-1">
            <Image
              alt="Album cover"
              className="object-cover"
              height={150}
              width="100%"
              shadow="md"
              src="/assets/images/project-cards/snapspot.png"
            />
          </div>

          <div className="flex flex-col col-span-2 md:col-span-3">
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col gap-0">
                <h1 className="text-large font-medium mt-2">Snapspot (Unfinished)</h1>
                <p className="text-small text-foreground/80">Snapspot is a project to allow users to request a picture of any location.  This goal of this project was mainly to learn NextJs and supporting technologies.</p>
              </div>
            </div>

            <div className="flex absolute bottom-0">
              <Link href="https://snapspot.suncoast.systems">Visit Snapspot</Link>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
