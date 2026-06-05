WebApp eksamensprojekt: Mille Høj Lauridsen og Mathilde Tilsted Hansen
Multimediedesign, 2. semester, IXD linjen

Vores projekt er bygget i React og deployet med GitHub Actions. Projektet er bygget som en SPA med én primær index.html side.

I vores projekt har vi brugt samme byggestruktur som ses i Figma. Hele appen er bygget op af komponenter der genbruges på tværs af pages gennem export og import.

Hovedsider i projektet

- BarDetailPage
- ChatPage
- ErrorPage
- FavoritesPage
- HomePage
- ProfilePage
- SearchPage

Generel struktur

I projektet bruger vi primært display funktioner, hvor vi viser vores indhold på siderne ved at bruge event handlers og conditionals. Derudover bruger vi state og props samt en integration til Supabase med CRUD metoden.

I projektet har vi brugt følgende react biblioteker:

- useState, useEffect
- lottie-react
- leaflet
- react
- react-dom
- react-router-dom

Backend: Supabase, 2 tabeller (bars og messages)

Arbejdsmetode og proces

Vi har bygget appen sammen gennem stort set hele processen. Vi har hver især lavet individuelle justeringer og styling, men vi har fortrinsvist siddet sammen og kodet langt det meste af tiden. Alle store funktioner og fetches mellem koden og Supabase er lavet sammen fra én computer. Vi har derved skiftedes til at sidde på en branch og arbejdet med den anden som sparringspartner.

Teknisk note

Vores preboarding er bygget med sessionstorage, for at simulere en virkelighedsnær oplevelse af appen. Hvis den skal vises igen, skal appen lukkes helt og linket skal åbnes igen.
