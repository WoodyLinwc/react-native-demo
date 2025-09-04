# React Native Android Setup on macOS

This guide explains the configuration needed to run a React Native app on Android emulator using Homebrew, Java 17, and VS Code.

## 1. Homebrew Environment

Add the following to your `~/.zshrc`:

```
eval "$(/opt/homebrew/bin/brew shellenv)"
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

## 2. Java Setup

React Native works best with **Java 17**

```
brew install openjdk@17
```

Then add to your `~/.zshrc`

```
# Java 17 environment
export JAVA_HOME=/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
```

Make sure to use Java 17 `java --version` instead of newer versions like Java 24 for Gradle/CMake compatibility.

## 3. Android SDK Setup

Make sure you have emulator setup already for example, Pixel_6, verify it in terminal `emulator -list-avds` and also `adb --version`

## 4. VS Code Configuration

Update your settings.json to ensure VS Code terminal uses the correct Java and Android environment.

For example:

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "workbench.iconTheme": "material-icon-theme",

  "terminal.integrated.profiles.osx": {
    "zsh": {
      "path": "/bin/zsh",
      "args": ["-l"]
    }
  },
  "terminal.integrated.defaultProfile.osx": "zsh",

  "terminal.integrated.env.osx": {
    "JAVA_HOME": "/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home",
    "PATH": "/opt/homebrew/opt/openjdk@17/bin:$PATH:$HOME/Library/Android/sdk/emulator:$HOME/Library/Android/sdk/platform-tools:$HOME/Library/Android/sdk/tools:$HOME/Library/Android/sdk/tools/bin"
  }
}

```

## 5. Run Code

Inside the module directory, open a terminal, run

```
npm start
```

Open another terminal, do

```
npm run android
```

## 5. Notes

- **First build may be slow** because Gradle downloads dependencies and configures CMake.

- Subsequent builds are much faster (cached by Gradle Daemon).

- Use `npx react-native doctor` to check for environment issues.

- Keep the emulator running for faster rebuilds.

# NativeWind (Tailwind CSS for RN)

[All the files you need](https://github.com/WoodyLinwc/react-native-demo/commit/649052f348c6cb034cefc468d14f9a503dbe4172)

# React Navigation (Stack, Tab, and Drawer Navigator)

- [Stack Navigator](https://github.com/WoodyLinwc/react-native-demo/commit/f3d477bbbb7f7f84227f770eb9fe4b7ef1f3fb8d)

- [Tab Navigator](https://github.com/WoodyLinwc/react-native-demo/commit/647c9d23a16f9c408ba6b710d57a92faf64fc756)

- - [Drawer Navigator](https://github.com/WoodyLinwc/react-native-demo/commit/9b94c90c64a896ac989abd8ce0d24a3fc7e1c613)

# Run

In one terminal

```
npx react-native start --reset-cache
```

Open another one

```
npm run android
```
