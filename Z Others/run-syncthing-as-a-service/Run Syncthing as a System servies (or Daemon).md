

```bash
mkdir -p ~/.config/systemd/user 
wget https://raw.githubusercontent.com/Rajib10098/Links/main/Z%20Others/run-syncthing-as-a-service/v1/syncthing.service -O ~/.config/systemd/user/syncthing.service 
systemctl --user enable --now syncthing
```
