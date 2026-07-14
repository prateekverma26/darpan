import { redirect } from "next/navigation";

// v2 is the current NGO DARPAN redesign (Emerald & Gold). v1 stays reachable
// at /ngo-darpan.html for comparison. Root opens straight onto the latest.
export default function Home() {
  redirect("/ngo-darpan.html");
}
