export type Project = {
title: string;
description?: string;
coverImage?: Image;
techStack?: string[];
images?: Image[];

}

type Image = {
    srcUrl: string;
    alt: string;
}