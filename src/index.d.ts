/* The MIT License (MIT)

Copyright (c) 2020 Mirco Sanguineti */

import { SvelteComponent } from 'svelte/internal'

declare class Fa extends SvelteComponent {
  $$prop_def: {
    class: string
    id: string
    style: string

    icon: { icon: any }
    fw: boolean
    flip: string
    pull: string
    rotate: number | string
    size: string
    color: string

    // Duotone Icons
    primaryColor: string
    secondaryColor: string
    primaryOpacity: number | string
    secondaryOpacity: number | string
    swapOpacity: boolean
  }
}
