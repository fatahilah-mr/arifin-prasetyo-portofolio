export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <p>© 2026 Arifin Prasetyo. All Rights Reserved.</p>
        <p>
          Crafted by{" "}
          <a
            href="https://fatahmr.my.id"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[var(--color-ink)] underline-offset-4 hover:text-primary hover:underline"
          >
            Fatahilah Miftahul Rahman
          </a>
        </p>
      </div>
    </footer>
  );
}
