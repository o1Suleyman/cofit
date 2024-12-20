import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"  

export default async function DashboardPage() {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
        redirect("/sign-in");
    }
    return (
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-screen-lg rounded-lg border md:min-w-[450px] my-auto"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[50vh] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>)
}