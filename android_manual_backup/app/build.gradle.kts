plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.abinet.prayer"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.abinet.prayer"
        minSdk = 24
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"
        
        manifestPlaceholders["hostName"] = "abinet-prayer.vercel.app"
        manifestPlaceholders["defaultUrl"] = "https://abinet-prayer.vercel.app/"
        manifestPlaceholders["assetStatements"] = "[{\\\"relation\\\": [\\\"delegate_permission/common.handle_all_urls\\\"], \\\"target\\\": {\\\"namespace\\\": \\\"web\\\", \\\"site\\\": \\\"https://abinet-prayer.vercel.app/\\\"}}]"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
}

dependencies {
    implementation("androidx.browser:browser:1.8.0")
    implementation("com.google.androidbrowserhelper:androidbrowserhelper:2.5.0")
}
