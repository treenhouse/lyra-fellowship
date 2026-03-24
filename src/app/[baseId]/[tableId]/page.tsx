"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { api } from "~/trpc/react";

export default function TableIndexPage() {
  const { baseId, tableId } = useParams<{ baseId: string; tableId: string }>();
  const router = useRouter();
  const { data: table, isLoading } = api.table.getById.useQuery({ id: tableId });

  useEffect(() => {
    const firstView = table?.views?.[0];
    if (!firstView) return;
    router.replace(`/${baseId}/${tableId}/${firstView.id}`);
  }, [table, baseId, tableId, router]);

  if (!isLoading && table?.views?.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <p className="text-[14px] text-gray-400">No views yet.</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Loader2 size={24} className="animate-spin text-blue-600" />
    </div>
  );
}
