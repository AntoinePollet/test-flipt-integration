FROM docker-registry.example.com/base:latest as builder

COPY main/features /tmp/data
RUN cd /tmp/data && \
    git config --global init.defaultBranch main && \
    git init && \
    git config user.name "Antoine Pollet" && \
    git config user.email "pollet.antoine.alexis@gmail.com" && \
    git add . && \
    git commit -m "Initial commit with feature flags"

FROM docker.flipt.io/flipt/flipt:v2

COPY --from=builder --chown=flipt:flipt /tmp/data /data
COPY --chown=flipt:flipt main/config.yml /config.yml

USER flipt
EXPOSE 8080 9000

CMD ["/flipt", "server", "--config", "/config.yml"]