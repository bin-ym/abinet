package com.abinet.prayer.app;

import android.os.Handler;
import android.os.Looper;
import android.widget.Toast;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private boolean doubleBackToExitPressedOnce = false;
    private static final int DOUBLE_BACK_PRESS_INTERVAL = 2000; // 2 seconds

    @Override
    public void onBackPressed() {
        // Check if we can go back in the WebView
        if (getBridge() != null && getBridge().getWebView() != null) {
            if (getBridge().getWebView().canGoBack()) {
                // Navigate back in WebView
                getBridge().getWebView().goBack();
                return;
            }
        }

        // If we can't go back, check for double-tap to exit
        if (doubleBackToExitPressedOnce) {
            super.onBackPressed();
            return;
        }

        this.doubleBackToExitPressedOnce = true;
        Toast.makeText(this, "Press back again to exit", Toast.LENGTH_SHORT).show();

        new Handler(Looper.getMainLooper()).postDelayed(() -> {
            doubleBackToExitPressedOnce = false;
        }, DOUBLE_BACK_PRESS_INTERVAL);
    }
}
