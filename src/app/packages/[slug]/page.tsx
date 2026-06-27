import PageDetailTemplate from '@/components/PageDetailTemplate';
import { packagesData } from '@/data/pagesData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(packagesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = packagesData[slug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.metaDescription,
    alternates: {
      canonical: `https://www.taxiservicebihar.com/packages/${slug}`,
    },
    openGraph: {
      type: "website",
      url: `https://www.taxiservicebihar.com/packages/${slug}`,
      title: data.title,
      description: data.metaDescription,
      siteName: "Taxi Service Bihar",
      images: [
        {
          url: "https://raw.githubusercontent.com/infisparks/images/refs/heads/main/bihartravel/thumbnail.png",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDescription,
      images: ["https://raw.githubusercontent.com/infisparks/images/refs/heads/main/bihartravel/thumbnail.png"],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = packagesData[slug];

  if (!data) {
    notFound();
  }

  return <PageDetailTemplate data={data} />;
}
