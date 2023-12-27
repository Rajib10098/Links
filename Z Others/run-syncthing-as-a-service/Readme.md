# Run Syncthing as a System servies (or Daemon)

**Run the this comand to run Syncthing as a system servies**

```bash
mkdir -p ~/.config/systemd/user 
wget https://raw.githubusercontent.com/Rajib10098/Links/main/Z%20Others/run-syncthing-as-a-service/v1/syncthing.service -O ~/.config/systemd/user/syncthing.service 
systemctl --user enable --now syncthing
```

[`https://raw.githubusercontent.com/Rajib10098/Links/main/Z%20Others/run-syncthing-as-a-service/v1/syncthing.service`](https://raw.githubusercontent.com/Rajib10098/Links/main/Z%20Others/run-syncthing-as-a-service/v1/syncthing.service)
