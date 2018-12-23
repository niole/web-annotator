# generate GRPC client

```
brew install protobuf
```

then...

```
export OUT_DIR=./frontend/src/client-api; protoc annotation.proto \
--js_out=import_style=typescript:$OUT_DIR \
--grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR
```
