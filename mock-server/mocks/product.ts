
interface ProductDetail {
  name: string;
  id: number;
  architecture: string;
  cpe: string;
  friendly_name: string;
  short_name: string;
  version: string;
  friendly_version: string;  // this would be best as a title
  kind: string;
  status: string;  // support status (general support / ltss)
  predecessors: number[];
  successors: number[];
};

export type Product = {
  name: string;
  id: number;
  friendly_name: string;  // this would be best as a title
  version: string;
  cpe: string;
  end_of_life: string | null;
  repos: string[];
  details: ProductDetail[];  // SCC Products
  increments: number[];
};

export interface BinaryIncrement {
  name: string;
  version: string;
  release: string | null;
  architecture: string;
}

export type ProductIncrement = {
  id: number;
  version: string;
};

export interface ProductIncrementExpanded extends ProductIncrement {
  binaries: BinaryIncrement[];
}

export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
};

export const products = [
  {
    name: "example-product-server",
    id: 1001,
    friendly_name: "Example Product Server 1.0",
    version: "1.0",
    cpe: "cpe:/o:example:product-server:1.0",
    end_of_life: null,
    repos: [
      "Example:Products:Product-Server:1.0:x86_64",
      "Example:Updates:Product-Server:1.0:x86_64",
    ],
    details: [
      {
        name: "example-product-server",
        id: 1001,
        architecture: "x86_64",
        cpe: "cpe:/o:example:product-server:1.0",
        friendly_name: "Example Product Server x86_64",
        short_name: "product-server",
        version: "1.0",
        friendly_version: "1.0",
        kind: "base",
        status: "General Support",
        predecessors: [],
        successors: [1002],
      },
      {
        name: "example-product-server-devel",
        id: 1004,
        architecture: "aarch64",
        cpe: "cpe:/o:example:product-server:1.0",
        friendly_name: "Example Product Server Devel aarch64",
        short_name: "product-server-devel",
        version: "1.0",
        friendly_version: "1.0",
        kind: "base",
        status: "General Support",
        predecessors: [],
        successors: [],
      },
      {
        name: "example-product-server-debug",
        id: 1005,
        architecture: "ppc64le",
        cpe: "cpe:/o:example:product-server:1.0 ppc64le",
        friendly_name: "Example Product Server Debug",
        short_name: "product-server-debug",
        version: "1.0",
        friendly_version: "1.0",
        kind: "base",
        status: "General Support",
        predecessors: [],
        successors: [],
      },

    ],
    increments: [1001, 1002],
  },
  {
    name: "example-product-client",
    id: 1002,
    friendly_name: "Example Product Client 2.0",
    version: "2.0",
    cpe: "cpe:/o:example:product-client:2.0",
    end_of_life: "2026-12-31",
    repos: [
      "Example:Products:Product-Client:2.0:arm64",
      "Example:Updates:Product-Client:2.0:arm64",
    ],
    details: [],
    increments: [1003],
  },
  {
    name: "example-beta-product",
    id: 1003,
    friendly_name: "Example Beta Product",
    version: "0.9-beta",
    cpe: "cpe:/o:example:beta-product:0.9",
    end_of_life: null,
    repos: ["Example:Products:Beta-Product:0.9:x86_64"],
    details: [],
    increments: [],
  },
];

export const productIncrements: ProductIncrementExpanded[] = [
  {
    id: 1001,
    version: "1.0",
    binaries: [
      {
        name: "bash",
        version: "5.1.16",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "coreutils",
        version: "9.1",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "grep",
        version: "3.8",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "findutils",
        version: "4.9.0",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "gzip",
        version: "1.12",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "tar",
        version: "1.34",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "sed",
        version: "4.8",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "diffutils",
        version: "3.9",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "xz",
        version: "5.2.7",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "util-linux",
        version: "2.38.1",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "shadow",
        version: "4.11.1",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "glibc",
        version: "2.36",
        release: null,
        architecture: "x86_64",
      },
    ]
  },
  {
    id: 1002,
    version: "2.0",
    binaries: [
      {
        name: "kernel",
        version: "5.14.21-150400.24.101",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "kernel-devel",
        version: "5.14.21-150400.24.101",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "kernel-default",
        version: "5.14.21-150400.24.101",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "kernel-default-devel",
        version: "5.14.21-150400.24.101",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "kernel-macros",
        version: "5.14.21-150400.24.101",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "kernel-syms",
        version: "5.14.21-150400.24.101",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "kernel-source",
        version: "5.14.21-150400.24.101",
        release: null,
        architecture: "x86_64",
      },
      {
        name: "kernel-docs",
        version: "5.14.21-150400.24.101",
        release: null,
        architecture: "x86_64",
      },
    ]
  },
  {
    id: 1003,
    version: "0.9-beta",
    binaries: [
      {
        name: "go",
        version: "12.3",
        release: null,
        architecture: "arm64"
      },
      {
        name: "go",
        version: "12.3",
        release: null,
        architecture: "x86"
      },
      {
        name: "go",
        version: "12.3",
        release: null,
        architecture: "ppc64"
      },
    ]
  },
];
