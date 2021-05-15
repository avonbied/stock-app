FROM hayd/centos-deno:1.0.0

# The port that your application listens to.
EXPOSE 1993

WORKDIR /app

RUN groupadd -r deno && useradd --no-log-init -r -g deno deno
# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally fetch deps.ts will download and compile _all_ external files used in main.ts.
COPY deps.ts .
RUN deno fetch deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno fetch main.ts

CMD ["--allow-net", "server.ts"]