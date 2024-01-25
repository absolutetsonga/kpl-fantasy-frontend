import { WildCard } from "@/src/06_entities/wildcard/ui";
import { draftAtom } from "@/src/07_shared/lib/store";
import { useAtomValue } from "jotai";

export const WildCardTabs = () => {
  const draft = useAtomValue(draftAtom);

  console.log(draft);

  return (
    <section className="flex w-full max-w-4xl mx-auto p-1 justify-start items-start">
      <WildCard played={true} title={"Bench Boost"} />
      <WildCard
        played={draft?.activated_triple_captain}
        title={"Triple Captain"}
      />
      <WildCard played={draft?.activated_free_hit} title={"Free Hit"} />
    </section>
  );
};
