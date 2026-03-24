"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { api } from "~/trpc/react";

export default function BaseIndexPage() {
  const { baseId } = useParams<{ baseId: string }>();
  const router = useRouter();
  const { data: base, isLoading } = api.base.getById.useQuery({ id: baseId });

  useEffect(() => {
    const firstTable = (base?.tables as Array<{ id: string }> | undefined)?.[0];
    if (!firstTable) return;
    // Redirect to table — the table page will then redirect to first view
    router.replace(`/${baseId}/${firstTable.id}`);
  }, [base, baseId, router]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <Loader2 size={24} className="animate-spin text-blue-600" />
      </div>
    );
  }

  if (!isLoading && base?.tables?.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <p className="text-[14px] text-gray-400">No tables yet. Create one to get started.</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Loader2 size={24} className="animate-spin text-blue-600" />
    </div>
  );
}
