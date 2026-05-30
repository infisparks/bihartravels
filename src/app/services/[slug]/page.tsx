import PageDetailTemplate from '@/components/PageDetailTemplate';
import { servicesData } from '@/data/pagesData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = servicesData[slug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.metaDescription,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return <PageDetailTemplate data={data} />;
}
