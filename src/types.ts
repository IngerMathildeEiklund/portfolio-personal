export type Project = {
title: string;
description?: string;
status?: string;
coverImage?: Image;
techStack?: string[];
year: number,
images?: Image[];
}

type Image = {
    srcUrl: string;
    alt: string;
}

