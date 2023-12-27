# Run Syncthing as a system service (or daemon)

**Run this command to run Syncthing as a system service.**

  ```bash
  mkdir -p ~/.config/systemd/user 
  wget https://raw.githubusercontent.com/Rajib10098/Links/main/Z%20Others/run-syncthing-as-a-service/v1/syncthing.service -O ~/.config/systemd  /user/syncthing.service 
  systemctl --user enable --now syncthing
  ```

[`https://raw.githubusercontent.com/Rajib10098/Links/main/Z%20Others/run-syncthing-as-a-service/v1/syncthing.service`](https://raw.githubusercontent.com/Rajib10098/Links/main/Z%20Others/run-syncthing-as-a-service/v1/syncthing.service)


> [!NOTE]
> This script won't work if your system does not have Syncthing installed.


**Remove**

```bash
systemctl --user stop syncthing 
systemctl --user disable syncthing
```

## File

- [https://github.com/Rajib10098/Links/blob/main/Z%20Others/run-syncthing-as-a-service/v1/syncthing.service](https://github.com/Rajib10098/Links/blob/main/Z%20Others/run-syncthing-as-a-service/v1/syncthing.service)
