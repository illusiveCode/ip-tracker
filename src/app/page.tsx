"use client";

import IPInput from "./components/IPInput";

export default function Home() {
  return (
    <div>
      <IPInput initialValue={""} onButtonClick={() => console.log("HELLO")} />
    </div>
  );
}
